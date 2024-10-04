import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

export default function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Important agreement!</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget
        dapibus augue. Integer ut ornare nulla. Quisque vitae pulvinar lacus.
        Donec vitae sem justo. Maecenas nisl tellus, gravida sed pretium ut,
        congue sit amet turpis. Mauris dapibus elit vel lorem efficitur, et
        dictum leo rhoncus. Mauris et lobortis lorem, pharetra feugiat mauris.
        Fusce convallis urna ut orci venenatis, at imperdiet elit tempor. Proin
        vulputate, ipsum viverra egestas suscipit, sem nunc sagittis sapien, nec
        ornare libero ipsum eu lacus. Donec mattis eleifend suscipit. Interdum
        et malesuada fames ac ante ipsum primis in faucibus. In eu laoreet nisl.
      </p>
    </div>
  );
}
