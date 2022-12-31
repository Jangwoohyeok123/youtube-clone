export const trending = (req, res) => {
  res.send("Home page Videos");
};

export const search = (req, res) => {
  const {id, sex} = req.params;
  console.log(`${id} + ${sex}`);
  return res.send("search");
};

// controller 는 request 를 처리하고 respond 를 return 하는 역할을 지닌다.
export const watch = (req, res) => {
  res.send("watch");
};

export const upload = (req, res) => {
  res.send("upload");
};

export const edit = (req, res) => {
  res.send("edit");
};

export const deleteVideo = (req, res) => {
  res.send("delete video");
};