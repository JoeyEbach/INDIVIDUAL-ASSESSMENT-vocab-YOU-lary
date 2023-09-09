import newEntry from '../forms/createEntry';

const formModal = () => {
  let domString = '';
  domString += `
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary create-entry" data-bs-toggle="modal" data-bs-target="#trigger">
    New codeWord
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="trigger" id="mod" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Create A New codeWord</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div id="create" class="modal-body">
          ${newEntry()}
        </div>
        <div class="modal-footer">
        </div>
      </div>
    </div>
  </div>
  `;

  return domString;
};

export default formModal;
