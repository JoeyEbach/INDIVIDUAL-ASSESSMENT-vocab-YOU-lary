const newEntry = () => {
  let domString = '';

  domString += `
  <div class="mb-3">
    <label for="title" class="form-label"></label>
    <input type="text" class="form-control" id="title" placeholder="codeWord" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
  <label for="definition"></label>
  <textarea class="form-control" rows="5" id="definition" placeholder="Definition"></textarea>
  </div>
  <select id="langTech" class="form-select" aria-label="Default select example">
    <option selected>Language | Tech</option>
    <option value="Javascript">Javascript</option>
    <option value="HTML">HTML</option>
    <option value="CSS">CSS</option>
    <option value="React">React</option>
    <option value="C#">C#</option>
  </select>
    <button type="submit" class="btn btn-primary" id="create-entry" data-bs-dismiss="modal">Submit</button>
`;

  return domString;
};

export default newEntry;
