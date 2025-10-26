import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as o}from"./iframe-B5RI7VXb.js";import{i as f}from"./index-CZLjyMr_.js";import{m as p}from"./proxy-CWRuBF69.js";import"./preload-helper-PPVm8Dsz.js";function u(n){const t=o.useRef(n);return f(t.current,n)||(t.current=n),t.current}const y={title:"Hooks/useStableObject",parameters:{layout:"centered"}},r=()=>{const[n,t]=o.useState(0),[i,d]=o.useState("asc"),a=u({limit:5,sort:i}),[c,l]=o.useState(0);return o.useEffect(()=>{l(s=>s+1)},[a]),e.jsxs("div",{style:{fontFamily:"Inter, sans-serif",background:"#0f172a",padding:"24px",borderRadius:"16px",width:"400px",color:"#f8fafc",boxShadow:"0 0 20px rgba(0,0,0,0.4)"},children:[e.jsx("h3",{style:{textAlign:"center",marginBottom:"16px"},children:"🧩 useStableObject Demo"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginBottom:"16px"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Count:"})," ",n]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Sort:"})," ",i]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Stable Object:"})," ",e.jsx("code",{style:{color:"#38bdf8"},children:JSON.stringify(a)})]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Effect Triggered:"})," ",e.jsxs(p.span,{animate:{scale:[1,1.2,1]},transition:{duration:.3},style:{color:c<5?"#10b981":c<10?"#f59e0b":"#ef4444"},children:[c," times"]},c)]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"8px",marginTop:"8px"},children:[e.jsx("button",{onClick:()=>t(s=>s+1),style:{background:"#2563eb",border:"none",padding:"8px 16px",borderRadius:"8px",color:"#fff",cursor:"pointer"},children:"Increment Count"}),e.jsx("button",{onClick:()=>d(s=>s==="asc"?"desc":"asc"),style:{background:"#9333ea",border:"none",padding:"8px 16px",borderRadius:"8px",color:"#fff",cursor:"pointer"},children:"Toggle Sort"})]}),e.jsxs("p",{style:{color:"#64748b",fontSize:"13px",textAlign:"center",marginTop:"20px"},children:["💡 Notice: Changing ",e.jsx("strong",{children:"count"})," does not trigger the effect, since ",e.jsx("code",{children:"useStableObject"})," keeps the same reference unless the object content changes."]})]})};r.__docgenInfo={description:"",methods:[],displayName:"StableObjectDemo"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  // Simulate dynamic object creation
  const filter = {
    limit: 5,
    sort
  };
  const stableFilter = useStableObject(filter);

  // Track how many times effects run
  const [effectRuns, setEffectRuns] = useState(0);

  // This effect only depends on the stable object reference
  useEffect(() => {
    setEffectRuns(prev => prev + 1);
  }, [stableFilter]);
  return <div style={{
    fontFamily: "Inter, sans-serif",
    background: "#0f172a",
    padding: "24px",
    borderRadius: "16px",
    width: "400px",
    color: "#f8fafc",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)"
  }}>
            <h3 style={{
      textAlign: "center",
      marginBottom: "16px"
    }}>
                🧩 useStableObject Demo
            </h3>

            <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      marginBottom: "16px"
    }}>
                <div>
                    <strong>Count:</strong> {count}
                </div>
                <div>
                    <strong>Sort:</strong> {sort}
                </div>
                <div>
                    <strong>Stable Object:</strong>{" "}
                    <code style={{
          color: "#38bdf8"
        }}>
                        {JSON.stringify(stableFilter)}
                    </code>
                </div>
                <div>
                    <strong>Effect Triggered:</strong>{" "}
                    <motion.span key={effectRuns} animate={{
          scale: [1, 1.2, 1]
        }} transition={{
          duration: 0.3
        }} style={{
          color: effectRuns < 5 ? "#10b981" : effectRuns < 10 ? "#f59e0b" : "#ef4444"
        }}>
                        {effectRuns} times
                    </motion.span>
                </div>
            </div>

            <div style={{
      display: "flex",
      justifyContent: "space-between",
      gap: "8px",
      marginTop: "8px"
    }}>
                <button onClick={() => setCount(c => c + 1)} style={{
        background: "#2563eb",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        color: "#fff",
        cursor: "pointer"
      }}>
                    Increment Count
                </button>

                <button onClick={() => setSort(s => s === "asc" ? "desc" : "asc")} style={{
        background: "#9333ea",
        border: "none",
        padding: "8px 16px",
        borderRadius: "8px",
        color: "#fff",
        cursor: "pointer"
      }}>
                    Toggle Sort
                </button>
            </div>

            <p style={{
      color: "#64748b",
      fontSize: "13px",
      textAlign: "center",
      marginTop: "20px"
    }}>
                💡 Notice: Changing <strong>count</strong> does not trigger the
                effect, since <code>useStableObject</code> keeps the same
                reference unless the object content changes.
            </p>
        </div>;
}`,...r.parameters?.docs?.source}}};const S=["StableObjectDemo"];export{r as StableObjectDemo,S as __namedExportsOrder,y as default};
