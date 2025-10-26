import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./iframe-B5RI7VXb.js";import"./preload-helper-PPVm8Dsz.js";function m(t,c="Component"){const o=s.useRef(null);s.useEffect(()=>{if(o.current){const d=Object.keys({...o.current,...t}),i={};d.forEach(r=>{o.current[r]!==t[r]&&(i[r]={from:o.current[r],to:t[r]})}),Object.keys(i).length>0&&console.log(`[${c}] changed:`,i)}o.current=t})}const h={title:"Hooks/useWhyDidYouRender"},l=()=>{const[t,c]=s.useState(0),[o,d]=s.useState("Hello"),[i,r]=s.useState([]),g=s.useRef(console.log);return s.useEffect(()=>(console.log=(...e)=>{const u=e.map(a=>typeof a=="object"?JSON.stringify(a,null,2):a).join(" ");r(a=>[u,...a].slice(0,10)),g.current(...e)},()=>{console.log=g.current}),[]),m({count:t,text:o},"WhyDidYouRenderDemo"),n.jsxs("div",{style:{fontFamily:"Inter, sans-serif",background:"#0f172a",color:"#f8fafc",padding:"2rem",borderRadius:"1rem",maxWidth:"600px",margin:"2rem auto",boxShadow:"0 10px 25px rgba(0,0,0,0.3)"},children:[n.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"1rem",textAlign:"center"},children:"🧩 useWhyDidYouRender Hook"}),n.jsxs("div",{style:{display:"flex",gap:"1rem",justifyContent:"center",marginBottom:"1rem"},children:[n.jsxs("button",{onClick:()=>c(e=>e+1),style:{background:"linear-gradient(90deg, #2563eb, #3b82f6)",border:"none",color:"#fff",padding:"0.6rem 1.2rem",borderRadius:"0.5rem",cursor:"pointer",fontWeight:600,transition:"all 0.2s"},onMouseOver:e=>e.currentTarget.style.opacity="0.9",onMouseOut:e=>e.currentTarget.style.opacity="1",children:["Increment Count (",t,")"]}),n.jsxs("button",{onClick:()=>d(o==="Hello"?"World":"Hello"),style:{background:"linear-gradient(90deg, #10b981, #22d3ee)",border:"none",color:"#fff",padding:"0.6rem 1.2rem",borderRadius:"0.5rem",cursor:"pointer",fontWeight:600,transition:"all 0.2s"},onMouseOver:e=>e.currentTarget.style.opacity="0.9",onMouseOut:e=>e.currentTarget.style.opacity="1",children:["Toggle Text (",o,")"]})]}),n.jsxs("div",{style:{background:"#1e293b",padding:"1rem",borderRadius:"0.5rem",height:"220px",overflowY:"auto",fontSize:"0.9rem"},children:[n.jsx("h3",{style:{margin:"0 0 0.5rem 0",color:"#38bdf8"},children:"📜 Logs:"}),i.length===0?n.jsx("p",{style:{color:"#94a3b8"},children:"No prop changes detected yet."}):n.jsx("ul",{style:{margin:0,paddingLeft:"1rem"},children:i.map((e,u)=>n.jsx("li",{style:{marginBottom:"0.5rem",whiteSpace:"pre-wrap"},children:e},u))})]})]})};l.__docgenInfo={description:"",methods:[],displayName:"Example"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("Hello");
  const [logs, setLogs] = useState<string[]>([]);
  const originalConsoleLog = useRef(console.log);

  // Capture logs printed by useWhyDidYouRender
  useEffect(() => {
    console.log = (...args: any[]) => {
      const message = args.map(a => typeof a === "object" ? JSON.stringify(a, null, 2) : a).join(" ");
      setLogs(prev => [message, ...prev].slice(0, 10)); // keep only last 10 logs
      originalConsoleLog.current(...args);
    };
    return () => {
      console.log = originalConsoleLog.current;
    };
  }, []);

  // Hook usage
  useWhyDidYouRender({
    count,
    text
  }, "WhyDidYouRenderDemo");
  return <div style={{
    fontFamily: "Inter, sans-serif",
    background: "#0f172a",
    color: "#f8fafc",
    padding: "2rem",
    borderRadius: "1rem",
    maxWidth: "600px",
    margin: "2rem auto",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
  }}>
            <h2 style={{
      fontSize: "1.5rem",
      marginBottom: "1rem",
      textAlign: "center"
    }}>
                🧩 useWhyDidYouRender Hook
            </h2>

            <div style={{
      display: "flex",
      gap: "1rem",
      justifyContent: "center",
      marginBottom: "1rem"
    }}>
                <button onClick={() => setCount(c => c + 1)} style={{
        background: "linear-gradient(90deg, #2563eb, #3b82f6)",
        border: "none",
        color: "#fff",
        padding: "0.6rem 1.2rem",
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontWeight: 600,
        transition: "all 0.2s"
      }} onMouseOver={e => e.currentTarget.style.opacity = "0.9"} onMouseOut={e => e.currentTarget.style.opacity = "1"}>
                    Increment Count ({count})
                </button>

                <button onClick={() => setText(text === "Hello" ? "World" : "Hello")} style={{
        background: "linear-gradient(90deg, #10b981, #22d3ee)",
        border: "none",
        color: "#fff",
        padding: "0.6rem 1.2rem",
        borderRadius: "0.5rem",
        cursor: "pointer",
        fontWeight: 600,
        transition: "all 0.2s"
      }} onMouseOver={e => e.currentTarget.style.opacity = "0.9"} onMouseOut={e => e.currentTarget.style.opacity = "1"}>
                    Toggle Text ({text})
                </button>
            </div>

            <div style={{
      background: "#1e293b",
      padding: "1rem",
      borderRadius: "0.5rem",
      height: "220px",
      overflowY: "auto",
      fontSize: "0.9rem"
    }}>
                <h3 style={{
        margin: "0 0 0.5rem 0",
        color: "#38bdf8"
      }}>
                    📜 Logs:
                </h3>
                {logs.length === 0 ? <p style={{
        color: "#94a3b8"
      }}>
                        No prop changes detected yet.
                    </p> : <ul style={{
        margin: 0,
        paddingLeft: "1rem"
      }}>
                        {logs.map((log, i) => <li key={i} style={{
          marginBottom: "0.5rem",
          whiteSpace: "pre-wrap"
        }}>
                                {log}
                            </li>)}
                    </ul>}
            </div>
        </div>;
}`,...l.parameters?.docs?.source}}};const b=["Example"];export{l as Example,b as __namedExportsOrder,h as default};
