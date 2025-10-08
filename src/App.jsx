import React, { useMemo, useRef, useState } from "react";
import Form from "./components/Form.jsx";
import Preview from "./components/Preview.jsx";
import { exportAsPDF } from "./pdf.js";

const emptyData = {
  name: "", title: "", email: "", phone: "",
  location: "", website: "", dob: "", photo: "",
  summary: "", skills: "",
  exps: [], edus: [], projs: []
};

const uid = () => crypto.randomUUID();

export default function App(){
  const [data, setData] = useState(emptyData);
  const previewRef = useRef(null);

  // actions add/update/remove
  const addExp  = () => setData(d => ({...d, exps:[...d.exps, {id:uid()}]}));
  const addEdu  = () => setData(d => ({...d, edus:[...d.edus, {id:uid()}]}));
  const addProj = () => setData(d => ({...d, projs:[...d.projs, {id:uid()}]}));

  const updateExp  = (i, val) => setData(d => ({...d, exps: d.exps.map((x,idx)=> idx===i? val : x)}));
  const updateEdu  = (i, val) => setData(d => ({...d, edus: d.edus.map((x,idx)=> idx===i? val : x)}));
  const updateProj = (i, val) => setData(d => ({...d, projs: d.projs.map((x,idx)=> idx===i? val : x)}));

  const removeExp  = (i) => setData(d => ({...d, exps: d.exps.filter((_,idx)=> idx!==i)}));
  const removeEdu  = (i) => setData(d => ({...d, edus: d.edus.filter((_,idx)=> idx!==i)}));
  const removeProj = (i) => setData(d => ({...d, projs: d.projs.filter((_,idx)=> idx!==i)}));

  const onPDF = () => exportAsPDF(previewRef.current, `CV-${data.name || "noname"}.pdf`);
  const onReset = () => {
    if (!confirm("Kosongkan semua isian?")) return;
    setData(emptyData);
  };

  // inject onPDF ke Preview
  const pData = useMemo(()=> ({...data, onPDF}), [data]);

  return (
    <div className="container">
      <h1>CV Instan – Generator PDF (React)</h1>
      <div className="grid">
        <Form
          data={data} setData={setData}
          addExp={addExp} addEdu={addEdu} addProj={addProj}
          updateExp={updateExp} updateEdu={updateEdu} updateProj={updateProj}
          removeExp={removeExp} removeEdu={removeEdu} removeProj={removeProj}
          onPDF={onPDF} onReset={onReset}
        />
        <Preview data={pData} ref={previewRef} />
      </div>
    </div>
  );
}
