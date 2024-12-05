import PropTypes from 'prop-types';


const Button = ({ title, id, leftIcon, rightIcon, containerClass }) => {
  return (
      <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
          {leftIcon}

          <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
              <div>
                  {title}
              </div>
          </span>

          {rightIcon}
      </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired, // Ensure title is a required string
    containerClass: PropTypes.string, // Optional string for container class
  id: PropTypes.string,
  leftIcon: PropTypes.element, // Ensure leftIcon is an element
  rightIcon: PropTypes.element, // Ensure rightIcon is an element
};

export default Button