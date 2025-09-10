function main() {
  const arr = [
  { id: 1, name: "John", x: { name: "John"}},
  { id: 2, name: "Jane", x: { name: "Jane"} },
  { id: 1, name: "John", x: { name: "John"} },
  { id: 3, name: "Mike", x: { name: "Mike"} },
  { id: 3, name: "Amit", x: { name: "Amit"} }
];

 const result = arr.sort((a, b) => a.x.name.localeCompare(b.x.name));
 console.log(result)

}

main()