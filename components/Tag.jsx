import styles from "./Tag.module.css"

function Tag({children}) {
   
  return (
    <div>
        
      <span className= {styles.tag}>{children}</span>
     
    </div>
  );
}

export default Tag