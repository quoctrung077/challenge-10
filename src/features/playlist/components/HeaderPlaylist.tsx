import { Button } from "antd";
import ButtonCreatePlaylist from "../../../components/common/Button/ButtonCreatePlaylist.tsx";

interface HeaderPlaylistProps {
  isShow: boolean;
  isCollapse: boolean;
  onShowChange: (newShowState: boolean) => void;
  onCollapseChange: (newCollapseState: boolean) => void;
  handleAddPlaylist: () => void;
}

const HeaderPlaylist: React.FC<HeaderPlaylistProps> = ({
  isShow,
  isCollapse,
  onShowChange,
  onCollapseChange,
  handleAddPlaylist,
}) => {
  const handleCollapseClick = () => {
    const newCollapseState = !isCollapse;
    onCollapseChange(newCollapseState);
  };

  const handleShowClick = () => {
    const newShowState = !isShow;
    onShowChange(newShowState);
  };

  return (
    <header
      className={`header-playlist ${isCollapse ? "collapsed" : ""} ${
        isShow ? "show" : ""
      }`}
    >
      <div className="header-playlist__wrapper">
        <div className="header-playlist__collapse">
          <Button
            className="btn__wrapper-text-icon"
            aria-label="Collapse Your Library"
            onClick={handleCollapseClick}
          >
            <span aria-hidden="true" className="btn__block">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="btn__icon-collapse"
              >
                <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
              </svg>
            </span>
            <span className={`btn__text ${isCollapse ? "collapsed" : ""} `}>
              Your Library
            </span>
          </Button>
        </div>
        <ButtonCreatePlaylist
          className={`btn__wrapper-text-icon ${isCollapse ? "collapsed" : ""} ${
            isShow ? "show" : ""
          }`}
          handleAddPlaylist={handleAddPlaylist}
        />
        <Button
          className={`btn__wrapper-text-icon ${isCollapse ? "collapsed" : ""} ${
            isShow ? "show" : ""
          }`}
          aria-label="Reduce Your Library"
          onClick={handleShowClick}
        >
          <span aria-hidden="true" className="btn__block">
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="btn__icon-show"
            >
              <path d="M8.81 1A.749.749 0 0 0 7.53.47L0 7.99l7.53 7.521a.75.75 0 0 0 1.234-.815.75.75 0 0 0-.174-.243L2.87 8.74h12.38a.75.75 0 1 0 0-1.498H2.87l5.72-5.713c.14-.14.22-.331.22-.53z"></path>
            </svg>
          </span>
        </Button>
      </div>
    </header>
  );
};

export default HeaderPlaylist;
