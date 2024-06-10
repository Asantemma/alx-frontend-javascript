export default function hasValuesFromArray(Set, Array) {
  return Array.reduce((acc, current) => acc && Set.has(current), true);
}
