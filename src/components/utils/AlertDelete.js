import React from "react";

export const AlertDelete = (props) => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
                DoNVD, Are you sure to delete this task ?
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">If you click yes, everything will be update</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              No/Cancel
            </button>
            <button type="button" class="btn btn-primary" onClick={() => props.onClickDeleteHandler()} data-dismiss="modal">
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
