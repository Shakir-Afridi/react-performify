import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as d}from"./iframe-B5RI7VXb.js";import{m as a}from"./proxy-CWRuBF69.js";import"./preload-helper-PPVm8Dsz.js";function x(){const[e,t]=d.useState({fps:0,memory:0});return d.useEffect(()=>{let r=0,i=performance.now(),s;const m=()=>{const c=performance.now();if(r++,c-i>=1e3){const l=r;r=0,i=c;const p=performance.memory?.usedJSHeapSize??0,f=p?p/1024/1024:0;t({fps:l,memory:Number(f.toFixed(2))})}s=requestAnimationFrame(m)};return s=requestAnimationFrame(m),()=>cancelAnimationFrame(s)},[]),e}const b={title:"Hooks/usePerformanceStats",parameters:{layout:"centered"}},o=()=>{const{fps:e,memory:t}=x();return n.jsxs("div",{style:{fontFamily:"Inter, sans-serif",padding:"20px",background:"#0f172a",borderRadius:"16px",color:"#f8fafc",width:"320px",boxShadow:"0 0 20px rgba(0,0,0,0.4)"},children:[n.jsx("h3",{style:{textAlign:"center",marginBottom:"16px"},children:"⚙️ Performance Stats"}),n.jsxs(a.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},style:{display:"flex",flexDirection:"column",gap:"12px",fontSize:"16px"},children:[n.jsxs("div",{children:[n.jsx("strong",{children:"FPS:"})," ",n.jsx(a.span,{animate:{scale:[1,1.2,1]},transition:{duration:.3},style:{color:e>=50?"#10b981":e>=30?"#f59e0b":"#ef4444"},children:e},e)]}),n.jsxs("div",{children:[n.jsx("strong",{children:"Memory:"})," ",n.jsxs(a.span,{animate:{scale:[1,1.2,1]},transition:{duration:.3},style:{color:t<200?"#10b981":t<400?"#f59e0b":"#ef4444"},children:[t," MB"]},t)]})]}),n.jsxs("div",{style:{marginTop:"20px",fontSize:"13px",color:"#64748b",textAlign:"center"},children:[n.jsx("p",{children:"FPS updates every second."}),n.jsx("p",{children:"Memory readings depend on browser support."})]})]})};o.__docgenInfo={description:"",methods:[],displayName:"LivePerformanceStats"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const {
    fps,
    memory
  } = usePerformanceStats();
  return <div style={{
    fontFamily: "Inter, sans-serif",
    padding: "20px",
    background: "#0f172a",
    borderRadius: "16px",
    color: "#f8fafc",
    width: "320px",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)"
  }}>
            <h3 style={{
      textAlign: "center",
      marginBottom: "16px"
    }}>
                ⚙️ Performance Stats
            </h3>

            <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.5
    }} style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      fontSize: "16px"
    }}>
                <div>
                    <strong>FPS:</strong>{" "}
                    <motion.span key={fps} animate={{
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 0.3
        }} style={{
          color: fps >= 50 ? "#10b981" : fps >= 30 ? "#f59e0b" : "#ef4444"
        }}>
                        {fps}
                    </motion.span>
                </div>

                <div>
                    <strong>Memory:</strong>{" "}
                    <motion.span key={memory} animate={{
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 0.3
        }} style={{
          color: memory < 200 ? "#10b981" : memory < 400 ? "#f59e0b" : "#ef4444"
        }}>
                        {memory} MB
                    </motion.span>
                </div>
            </motion.div>

            <div style={{
      marginTop: "20px",
      fontSize: "13px",
      color: "#64748b",
      textAlign: "center"
    }}>
                <p>FPS updates every second.</p>
                <p>Memory readings depend on browser support.</p>
            </div>
        </div>;
}`,...o.parameters?.docs?.source}}};const h=["LivePerformanceStats"];export{o as LivePerformanceStats,h as __namedExportsOrder,b as default};
