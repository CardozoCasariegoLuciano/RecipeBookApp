const Glossary = require("../models/glossary.model");

async function getGlossaryes(req, res) {
  const allGlossaryes = await Glossary.find();
  res.json(allGlossaryes);
}

async function addAGlossarye(req, res) {
  try {
    const { title, description } = req.body;

    console.log(req.body);

    const newGlossary = Glossary({
      title,
      description,
    });

    const glosarySaved = await newGlossary.save();

    res.json({ mensaje: "Glossary saved" });
  } catch (error) {
    console.log(error);
  }
}

async function getAsingleGlossarye(req, res) {
  try {
    const aGlosary = await Glossary.findById(req.params.id);
    res.json(aGlosary);
  } catch (error) {
    console.log(error);
  }
}

async function deleteAGlossarye(req, res) {
  try {
    await Glossary.findByIdAndDelete(req.params.id);
    res.json({ mensaje: "glosario eliminado" });
  } catch (error) {
    console.log(error);
  }
}

async function updateAGlossarye(req, res) {
  try {
    const { title, description } = req.body;

    const nuevoDato = {
      title,
      description,
    }

    await Glossary.findByIdAndUpdate(req.params.id, nuevoDato);

    res.json({ mensaje: "Glosario actualizado", idModificado: req.params.id  });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getGlossaryes,
  addAGlossarye,
  getAsingleGlossarye,
  deleteAGlossarye,
  updateAGlossarye,
};
