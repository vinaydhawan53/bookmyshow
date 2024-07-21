
// import React, { Component } from 'react'
// import SearchModal from 'bisu-react-search-modal'
 
// class ShowModal extends Component {
 
//   constructor(props) {
//     super(props)
//     this.state = {
//       showModal: false,
//     }
//   }
 
//   _onSubmit = (term) => {
//     alert('You searched for: ', term)
//   }
 
//   render() {
//     const { showModal } = this.state
 
//     return (
//       <div>
//         <button type="button" onClick={() => this.setState({ showModal: true })}>Show SearchModal</button>
//         <SearchModal
//           placeholder="Search term"
//           handleClose={() => this.setState({ showModal: false })}
//           isOpen={showModal}
//           onSubmit={this._onSearch}
//         >
//           <div>Search results here.</div>
//         </SearchModal>
//       </div>
//     )
//   }
// }