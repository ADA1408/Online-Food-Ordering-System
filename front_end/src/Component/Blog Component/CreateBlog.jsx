import React from 'react'

function CreateBlog() {
    return (
      <>
        <div className="container">
          <div className="container">
            <div className="container">
              <form>
                <div class="form-group">
                  <label for="blogTitle">Blog Title</label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Enter Title"
                  />
                  <br />
                </div>
                <label class="form-label" for="customFile">
                  Upload Image
                </label>
                <input type="file" class="form-control" id="customFile" />
                <br />
                <div class="form-group">
                  <label for="blogContent">Blog Content</label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    rows="10"
                  />
                </div>
                <br />
                <button type="submit" class="btn btn-secondary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
  

export default CreateBlog