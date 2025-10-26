import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-B5RI7VXb.js";import{m as f}from"./proxy-CWRuBF69.js";import"./preload-helper-PPVm8Dsz.js";function g(l,m){const{itemHeight:o,height:a,scrollTop:e}=m;return c.useMemo(()=>{const r=Math.floor(e/o),h=Math.min(l.length-1,Math.floor((e+a)/o)),d=l.slice(r,h+1),p=r*o;return{visibleItems:d,startOffset:p}},[l,o,a,e])}const y={title:"Hooks/useVirtualList",parameters:{layout:"centered"}},s=()=>{const a=Array.from({length:1e3},(n,i)=>`Item ${i+1}`),e=c.useRef(null),[r,h]=c.useState(0),{visibleItems:d,startOffset:p}=g(a,{itemHeight:50,height:400,scrollTop:r});return c.useEffect(()=>{const n=()=>{e.current&&h(e.current.scrollTop)},i=e.current;return i?.addEventListener("scroll",n),()=>i?.removeEventListener("scroll",n)},[]),t.jsxs("div",{style:{fontFamily:"Inter, sans-serif",width:320,border:"1px solid #475569",borderRadius:12,overflow:"hidden",background:"#0f172a",color:"#f8fafc"},children:[t.jsx("h3",{style:{padding:"12px 16px",margin:0,background:"#1e293b",borderBottom:"1px solid #475569",fontWeight:600,textAlign:"center"},children:"🧮 useVirtualList Demo"}),t.jsx("div",{ref:e,style:{height:400,overflowY:"auto",position:"relative",background:"#0f172a"},children:t.jsx("div",{style:{height:1e3*50,position:"relative"},children:t.jsx(f.div,{style:{position:"absolute",top:p,left:0,right:0},layout:!0,children:d.map((n,i)=>t.jsx("div",{style:{height:46,lineHeight:"46px",margin:"2px 8px",borderRadius:6,paddingLeft:8,background:i%2===0?"rgba(56, 189, 248, 0.1)":"rgba(56, 189, 248, 0.2)",border:"1px solid rgba(56, 189, 248, 0.3)",color:"#38bdf8",fontSize:14,fontWeight:500},children:n},n))})})}),t.jsxs("div",{style:{borderTop:"1px solid #475569",padding:"8px 16px",background:"#1e293b",fontSize:13,color:"#94a3b8",display:"flex",justifyContent:"space-between"},children:[t.jsxs("div",{children:["Scroll: ",Math.round(r),"px"]}),t.jsxs("div",{children:["Visible: ",d.length]})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"VirtualListDemo"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const totalItems = 1000;
  const itemHeight = 50;
  const viewportHeight = 400;

  // Create 1000 mock items
  const items = Array.from({
    length: totalItems
  }, (_, i) => \`Item \${i + 1}\`);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const {
    visibleItems,
    startOffset
  } = useVirtualList(items, {
    itemHeight,
    height: viewportHeight,
    scrollTop
  });
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollTop(containerRef.current.scrollTop);
      }
    };
    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);
  return <div style={{
    fontFamily: "Inter, sans-serif",
    width: 320,
    border: "1px solid #475569",
    borderRadius: 12,
    overflow: "hidden",
    background: "#0f172a",
    color: "#f8fafc"
  }}>
            <h3 style={{
      padding: "12px 16px",
      margin: 0,
      background: "#1e293b",
      borderBottom: "1px solid #475569",
      fontWeight: 600,
      textAlign: "center"
    }}>
                🧮 useVirtualList Demo
            </h3>

            <div ref={containerRef} style={{
      height: viewportHeight,
      overflowY: "auto",
      position: "relative",
      background: "#0f172a"
    }}>
                {/* Placeholder total height */}
                <div style={{
        height: totalItems * itemHeight,
        position: "relative"
      }}>
                    <motion.div style={{
          position: "absolute",
          top: startOffset,
          left: 0,
          right: 0
        }} layout>
                        {visibleItems.map((item, i) => <div key={item} style={{
            height: itemHeight - 4,
            lineHeight: \`\${itemHeight - 4}px\`,
            margin: "2px 8px",
            borderRadius: 6,
            paddingLeft: 8,
            background: i % 2 === 0 ? "rgba(56, 189, 248, 0.1)" : "rgba(56, 189, 248, 0.2)",
            border: "1px solid rgba(56, 189, 248, 0.3)",
            color: "#38bdf8",
            fontSize: 14,
            fontWeight: 500
          }}>
                                {item}
                            </div>)}
                    </motion.div>
                </div>
            </div>

            <div style={{
      borderTop: "1px solid #475569",
      padding: "8px 16px",
      background: "#1e293b",
      fontSize: 13,
      color: "#94a3b8",
      display: "flex",
      justifyContent: "space-between"
    }}>
                <div>Scroll: {Math.round(scrollTop)}px</div>
                <div>Visible: {visibleItems.length}</div>
            </div>
        </div>;
}`,...s.parameters?.docs?.source}}};const H=["VirtualListDemo"];export{s as VirtualListDemo,H as __namedExportsOrder,y as default};
