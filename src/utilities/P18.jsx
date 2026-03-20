function P18({ children, classname }) {
  return (
    <p style={{ fontSize: "1.8rem" }} className={classname}>
      {children}
    </p>
  );
}

export function P18B({ children }) {
  return <p style={{ fontSize: "1.8rem", fontWeight: 800 }}>{children}</p>;
}

export default P18;
