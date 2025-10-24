import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-B5RI7VXb.js";import{m as c}from"./proxy-CWRuBF69.js";import"./preload-helper-PPVm8Dsz.js";function u(n,r){const o=t.useRef(0);return t.useCallback((...i)=>{const a=Date.now();a-o.current>=r&&(o.current=a,n(...i))},[n,r])}const g={title:"Hooks/useThrottledCallback",parameters:{layout:"centered"}},s={initialized:!1,rawCalls:0,throttledCalls:0},l=()=>{const[n,r]=t.useState(()=>s.rawCalls??0),[o,i]=t.useState(()=>s.throttledCalls??0);t.useEffect(()=>{s.initialized||(s.initialized=!0,console.log("Demo: one-time initialization (module-level)"))},[]),t.useEffect(()=>{s.rawCalls=n},[n]),t.useEffect(()=>{s.throttledCalls=o},[o]);const a=t.useCallback(()=>{r(d=>d+1)},[]),h=u(()=>{i(d=>d+1)},500),m=()=>{a(),h()};return e.jsxs("div",{style:{fontFamily:"Inter, sans-serif",padding:"24px",background:"#0f172a",borderRadius:"16px",color:"#f8fafc",width:"450px",textAlign:"center",boxShadow:"0 0 20px rgba(0,0,0,0.4)"},children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"⚡ useThrottledCallback Demo"}),e.jsxs("p",{style:{color:"#94a3b8",marginBottom:"16px"},children:["Move your mouse inside the box below. The ",e.jsx("strong",{children:"raw"})," ","callback fires on every movement, while the"," ",e.jsx("strong",{children:"throttled"})," one fires at most once every 500ms."]}),e.jsx("div",{onMouseMove:m,style:{border:"2px dashed #38bdf8",borderRadius:12,height:100,display:"flex",alignItems:"center",justifyContent:"center",background:"#1e293b",color:"#38bdf8",cursor:"crosshair",marginBottom:20},children:"Move mouse here 🖱️"}),e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsxs(c.div,{style:{padding:16,borderRadius:12,minWidth:150},children:[e.jsx("h4",{children:"Raw Calls"}),e.jsx("div",{style:{fontSize:28,fontWeight:700},children:n})]}),e.jsxs(c.div,{style:{padding:16,borderRadius:12,minWidth:150},children:[e.jsx("h4",{children:"Throttled Calls"}),e.jsx("div",{style:{fontSize:28,fontWeight:700},children:o})]})]}),e.jsx("p",{style:{color:"#64748b",fontSize:"13px",marginTop:"20px"},children:"💡 Notice: React Strict Mode remounts the component once in dev mode, but this guard ensures stable state across reinitializations."})]})};l.__docgenInfo={description:"",methods:[],displayName:"ThrottledCallbackDemo"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  // Initialize state from module-level store
  const [rawCalls, setRawCalls] = useState(() => PERSIST.rawCalls ?? 0);
  const [throttledCalls, setThrottledCalls] = useState(() => PERSIST.throttledCalls ?? 0);

  // Ensure we do one-time init only (persisted across remounts)
  useEffect(() => {
    if (!PERSIST.initialized) {
      PERSIST.initialized = true;
      console.log("Demo: one-time initialization (module-level)");
    }
  }, []);

  // Keep the module-level store in sync whenever values change
  useEffect(() => {
    PERSIST.rawCalls = rawCalls;
  }, [rawCalls]);
  useEffect(() => {
    PERSIST.throttledCalls = throttledCalls;
  }, [throttledCalls]);
  const handleRaw = useCallback(() => {
    setRawCalls(c => c + 1);
  }, []);
  const handleThrottled = useThrottledCallback(() => {
    setThrottledCalls(c => c + 1);
  }, 500);
  const handleMouseMove = () => {
    handleRaw();
    handleThrottled();
  };
  return <div style={{
    fontFamily: "Inter, sans-serif",
    padding: "24px",
    background: "#0f172a",
    borderRadius: "16px",
    color: "#f8fafc",
    width: "450px",
    textAlign: "center",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)"
  }}>
            <h3 style={{
      marginBottom: "16px"
    }}>
                ⚡ useThrottledCallback Demo
            </h3>

            <p style={{
      color: "#94a3b8",
      marginBottom: "16px"
    }}>
                Move your mouse inside the box below. The <strong>raw</strong>{" "}
                callback fires on every movement, while the{" "}
                <strong>throttled</strong> one fires at most once every 500ms.
            </p>

            <div onMouseMove={handleMouseMove} style={{
      border: "2px dashed #38bdf8",
      borderRadius: 12,
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#1e293b",
      color: "#38bdf8",
      cursor: "crosshair",
      marginBottom: 20
    }}>
                Move mouse here 🖱️
            </div>

            <div style={{
      display: "flex",
      gap: 12
    }}>
                <motion.div style={{
        padding: 16,
        borderRadius: 12,
        minWidth: 150
      }}>
                    <h4>Raw Calls</h4>
                    <div style={{
          fontSize: 28,
          fontWeight: 700
        }}>
                        {rawCalls}
                    </div>
                </motion.div>

                <motion.div style={{
        padding: 16,
        borderRadius: 12,
        minWidth: 150
      }}>
                    <h4>Throttled Calls</h4>
                    <div style={{
          fontSize: 28,
          fontWeight: 700
        }}>
                        {throttledCalls}
                    </div>
                </motion.div>
            </div>

            <p style={{
      color: "#64748b",
      fontSize: "13px",
      marginTop: "20px"
    }}>
                💡 Notice: React Strict Mode remounts the component once in dev
                mode, but this guard ensures stable state across
                reinitializations.
            </p>
        </div>;
}`,...l.parameters?.docs?.source}}};const C=["ThrottledCallbackDemo"];export{l as ThrottledCallbackDemo,C as __namedExportsOrder,g as default};
