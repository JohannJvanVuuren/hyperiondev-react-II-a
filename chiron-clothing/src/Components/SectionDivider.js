/* Import of the main style sheet. */
import '../css/main.min.css';

/* A reusable component to create vertical space between other components. */
function SectionDivider(props) {

  return (
    <div className="section-divider">
      <h2>{props.sectionName}</h2>
    </div>
  );
}

/* Export of component for import into App.js */
export default SectionDivider;