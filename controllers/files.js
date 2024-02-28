async function addFile(req, res) {
    console.log(req.file)
    // const { name, content } = req.body;
    // const file = await File.create({ name, content });
    // res.json(file);
    res.json({ message: "File uploaded successfully", data: req.file });
}

module.exports = {
    addFile,
};

