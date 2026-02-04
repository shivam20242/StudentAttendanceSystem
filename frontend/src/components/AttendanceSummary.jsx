export default function AttendanceSummary({ students }) {
  const total = students.length;
  const present = students.filter(s => s.isPresent).length;
  const absent = total - present;

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Summary</h3>
      <p>Total: {total}</p>
      <p>Present: {present}</p>
      <p>Absent: {absent}</p>
    </div>
  );
}
