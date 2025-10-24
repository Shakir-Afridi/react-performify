import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-B5RI7VXb.js";import{m as c}from"./proxy-CWRuBF69.js";import"./preload-helper-PPVm8Dsz.js";function p(){const r=s.useRef(1);return r.current++,r.current}const m={title:"Hooks/useRenderCount",parameters:{layout:"centered"}},t=()=>{const[r,i]=s.useState(""),[d,a]=s.useState(0),e=p();return n.jsxs("div",{style:{fontFamily:"Inter, sans-serif",padding:"24px",background:"#0f172a",borderRadius:"16px",color:"#f8fafc",width:"360px",textAlign:"center",boxShadow:"0 0 20px rgba(0,0,0,0.4)"},children:[n.jsx("h3",{style:{marginBottom:"20px"},children:"🔁 Render Count Demo"}),n.jsx(c.div,{animate:{scale:[1,1.15,1]},transition:{duration:.3},style:{fontSize:"42px",fontWeight:"bold",color:e<10?"#10b981":e<20?"#f59e0b":"#ef4444",marginBottom:"16px"},children:e},e),n.jsxs("p",{style:{color:"#94a3b8",marginBottom:"20px"},children:["Component re-rendered ",n.jsx("strong",{children:e})," times."]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",alignItems:"center"},children:[n.jsx("input",{type:"text",value:r,onChange:o=>i(o.target.value),placeholder:"Type to trigger re-renders...",style:{padding:"8px 12px",borderRadius:"8px",border:"1px solid #334155",width:"80%",background:"#1e293b",color:"#f8fafc"}}),n.jsxs("button",{onClick:()=>a(o=>o+1),style:{background:"#2563eb",border:"none",padding:"10px 20px",borderRadius:"8px",color:"#fff",cursor:"pointer",fontWeight:"500"},children:["Click Me (",d,")"]})]}),n.jsx("p",{style:{color:"#64748b",fontSize:"13px",marginTop:"20px"},children:"💡 Try typing or clicking — each change triggers a re-render."})]})};t.__docgenInfo={description:"",methods:[],displayName:"RenderCountDemo"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const [text, setText] = useState("");
  const [clicks, setClicks] = useState(0);
  const renderCount = useRenderCount();
  return <div style={{
    fontFamily: "Inter, sans-serif",
    padding: "24px",
    background: "#0f172a",
    borderRadius: "16px",
    color: "#f8fafc",
    width: "360px",
    textAlign: "center",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)"
  }}>
            <h3 style={{
      marginBottom: "20px"
    }}>🔁 Render Count Demo</h3>

            <motion.div key={renderCount} animate={{
      scale: [1, 1.15, 1]
    }} transition={{
      duration: 0.3
    }} style={{
      fontSize: "42px",
      fontWeight: "bold",
      color: renderCount < 10 ? "#10b981" : renderCount < 20 ? "#f59e0b" : "#ef4444",
      marginBottom: "16px"
    }}>
                {renderCount}
            </motion.div>

            <p style={{
      color: "#94a3b8",
      marginBottom: "20px"
    }}>
                Component re-rendered <strong>{renderCount}</strong> times.
            </p>

            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      alignItems: "center"
    }}>
                <input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Type to trigger re-renders..." style={{
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #334155",
        width: "80%",
        background: "#1e293b",
        color: "#f8fafc"
      }} />

                <button onClick={() => setClicks(c => c + 1)} style={{
        background: "#2563eb",
        border: "none",
        padding: "10px 20px",
        borderRadius: "8px",
        color: "#fff",
        cursor: "pointer",
        fontWeight: "500"
      }}>
                    Click Me ({clicks})
                </button>
            </div>

            <p style={{
      color: "#64748b",
      fontSize: "13px",
      marginTop: "20px"
    }}>
                💡 Try typing or clicking — each change triggers a re-render.
            </p>
        </div>;
}`,...t.parameters?.docs?.source}}};const f=["RenderCountDemo"];export{t as RenderCountDemo,f as __namedExportsOrder,m as default};
