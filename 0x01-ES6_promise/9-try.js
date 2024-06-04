export default function guardrail(mathFunction) {
  const array = [];

  try {
    const result = mathFunction();
    array.push(result);
  } catch (error) {
    array.push(error.toString());
  } finally {
    array.push('Guardrail was processed');
  }
  return array;
}
