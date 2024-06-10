export default function getStudentsByLocation(student, city) {
  if (!Array.isArray(student)) return [];
  return student.filter((val) => val.location === city);
}
