import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as t}from"./iframe-B5RI7VXb.js";import"./preload-helper-PPVm8Dsz.js";function f(u,d=500){const[l,p]=t.useState({fps:0,duration:0}),o=t.useRef(0),r=t.useRef(performance.now());return t.useEffect(()=>{let a,c=performance.now();const n=s=>{o.current++;const m=s-r.current;if(m>=1e3){const x=o.current*1e3/m;p({fps:x,duration:m}),o.current=0,r.current=s}s-c>=d&&(c=s,p(x=>({...x}))),a=requestAnimationFrame(n)};return a=requestAnimationFrame(n),()=>cancelAnimationFrame(a)},[d]),{name:u,...l}}const b={title:"Hooks/usePerformanceMonitor",parameters:{layout:"centered"}},i=()=>{const[u,d]=t.useState([]),[l,p]=t.useState(800),{fps:o,duration:r,name:a}=f("UI Render",l);t.useEffect(()=>{d(n=>[...n.slice(-9),`🕒 ${new Date().toLocaleTimeString()} — ${o.toFixed(1)} fps | ${r.toFixed(0)} ms`])},[o,r]);const c=n=>{p(Number(n.target.value))};return e.jsxs("div",{style:{background:"#0d1117",color:"#e6edf3",fontFamily:"monospace",padding:"20px",borderRadius:"12px",width:"450px",height:"400px",overflow:"auto",boxShadow:"0 4px 15px rgba(0,0,0,0.3)"},children:[e.jsx("h3",{style:{color:"#58a6ff"},children:a}),e.jsxs("div",{style:{marginBottom:"10px"},children:[e.jsx("label",{htmlFor:"refresh",style:{marginRight:"10px"},children:e.jsx("strong",{children:"Refresh rate:"})}),e.jsxs("select",{id:"refresh",value:l,onChange:c,style:{background:"#161b22",color:"#e6edf3",border:"1px solid #30363d",borderRadius:"6px",padding:"4px 8px"},children:[e.jsx("option",{value:200,children:"200 ms"}),e.jsx("option",{value:500,children:"500 ms"}),e.jsx("option",{value:800,children:"800 ms"}),e.jsx("option",{value:1e3,children:"1000 ms"}),e.jsx("option",{value:2e3,children:"2000 ms"})]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:"FPS:"})," ",o.toFixed(1)," |"," ",e.jsx("strong",{children:"Duration:"})," ",r.toFixed(0)," ms"]}),e.jsx("div",{style:{marginTop:"10px",background:"#161b22",padding:"10px",borderRadius:"8px",height:"250px",overflowY:"auto",fontSize:"0.9rem"},children:u.map((n,s)=>e.jsx("div",{children:n},s))})]})};i.__docgenInfo={description:"",methods:[],displayName:"Default"};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  const [logs, setLogs] = useState<string[]>([]);
  const [refreshRate, setRefreshRate] = useState(800);
  const {
    fps,
    duration,
    name
  } = usePerformanceMonitor("UI Render", refreshRate);
  useEffect(() => {
    setLogs(prev => [...prev.slice(-9), \`🕒 \${new Date().toLocaleTimeString()} — \${fps.toFixed(1)} fps | \${duration.toFixed(0)} ms\`]);
  }, [fps, duration]);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRefreshRate(Number(e.target.value));
  };
  return <div style={{
    background: "#0d1117",
    color: "#e6edf3",
    fontFamily: "monospace",
    padding: "20px",
    borderRadius: "12px",
    width: "450px",
    height: "400px",
    overflow: "auto",
    boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
  }}>
            <h3 style={{
      color: "#58a6ff"
    }}>{name}</h3>

            <div style={{
      marginBottom: "10px"
    }}>
                <label htmlFor="refresh" style={{
        marginRight: "10px"
      }}>
                    <strong>Refresh rate:</strong>
                </label>
                <select id="refresh" value={refreshRate} onChange={handleChange} style={{
        background: "#161b22",
        color: "#e6edf3",
        border: "1px solid #30363d",
        borderRadius: "6px",
        padding: "4px 8px"
      }}>
                    <option value={200}>200 ms</option>
                    <option value={500}>500 ms</option>
                    <option value={800}>800 ms</option>
                    <option value={1000}>1000 ms</option>
                    <option value={2000}>2000 ms</option>
                </select>
            </div>

            <p>
                <strong>FPS:</strong> {fps.toFixed(1)} |{" "}
                <strong>Duration:</strong> {duration.toFixed(0)} ms
            </p>

            <div style={{
      marginTop: "10px",
      background: "#161b22",
      padding: "10px",
      borderRadius: "8px",
      height: "250px",
      overflowY: "auto",
      fontSize: "0.9rem"
    }}>
                {logs.map((log, i) => <div key={i}>{log}</div>)}
            </div>
        </div>;
}`,...i.parameters?.docs?.source}}};const R=["Default"];export{i as Default,R as __namedExportsOrder,b as default};
