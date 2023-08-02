import { Modal } from "antd";

import React from 'react'

const ArtistForm = ({showArtistForm, setShowArtistForm}) => {
  return (
    <Modal
    open={showArtistForm}
    onCancel={() => setShowArtistForm(false)}
    title="Add Artist"
    centered
    >
     <div>Artist Form</div>
    </Modal>
  )
}

export default ArtistForm