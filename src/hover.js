const dynamicList = () => {

    useEffect(() => {
           ReactTooltip.rebuild();
       });
   
   return(
     <list>
       {data.map((item)=> {
         <span data-for="foo">My late bound tooltip triggered data</span>
       })}
     </list>
   );
   };