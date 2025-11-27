// SampleContent.jsx
const SampleContent = ({ targetRef }) => {
  return (
    <div>
      <section ref={targetRef} style={{ height: '100vh', background: '#ccc' }}>
        WATCH AREA（ここに来たら Header の色が変わる）
      </section>
    </div>
  );
};

export default SampleContent;
