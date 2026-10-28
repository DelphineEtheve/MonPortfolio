import styles from "../app/page.module.css"

function Tags({technologie}) {
   
  return (
    <div>
        
      <span className= {styles.tag}>{technologie}</span>
     
    </div>
  );
}

export default Tags