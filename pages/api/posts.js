export default function handler(req, res) {
  const data = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];
  res.status(200).json(data);
}
