import React from "react";

const bootstrap = "s";
// const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
// const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));

function ChatPopover() {
  return (
    <div className="container mt-5">
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-toggle="popover"
        data-bs-placement="right"
        data-bs-custom-class="custom-popover"
        data-bs-title="Custom popover"
        data-bs-content="This popover is themed via CSS variables."
      >
        Custom popover
      </button>
    </div>
  );
}

export default ChatPopover;
