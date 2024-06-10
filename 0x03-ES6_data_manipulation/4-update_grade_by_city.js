export default function updateStudentGradeByCity(arr, city, newGrades) {
  return arr
    .filter((student) => student.location === city)
    .map((student) => ({
      ...student,
      grade:
        newGrades
          .filter((grd) => grd.studentId === student.id)
          .map((grd) => grd.grade)[0] || 'N/A',
    }));
}
