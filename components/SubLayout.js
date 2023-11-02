import style from "./SubLayout.module.css";

export default function SubLayout({ children }) {
  return (
    // className으로 구분자 작명
    <div className="SubLayout"> 
    {/* 칠드런요소들이 할당될 위치 */}
      <div>{children}</div> 
      <footer className={style.footer}>@jake0319</footer>
    </div>
  );
}