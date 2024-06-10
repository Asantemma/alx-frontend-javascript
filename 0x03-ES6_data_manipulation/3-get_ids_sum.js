export default function getStudentIdsSum(student) {
  if (!Array.isArray(student)) return [];
  return student.reduce((accum, newVal) => accum + newVal.id, 0);
}
