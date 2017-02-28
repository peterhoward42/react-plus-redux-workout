/**
 * This is a utility component that renders nothing of itself, but causes the
 * window to scroll to to the top when it is rendered. It is intended to be 
 * composed into other components to "bless" them with this same behaviour.
 */

const ScrollToTop = () => {
    window.scrollTo(0, 0);
    return null
}

export { ScrollToTop }