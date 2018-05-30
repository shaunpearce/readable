import React, { Component } from 'react'
import Select from 'react-select'
import createClass from 'create-react-class'
import 'react-select/dist/react-select.css'

const GravatarOption = createClass({
	
	handleMouseDown (event) {
		event.preventDefault()
		event.stopPropagation()
		this.props.onSelect(this.props.option, event)
	},
	handleMouseEnter (event) {
		this.props.onFocus(this.props.option, event)
	},
	handleMouseMove (event) {
		if (this.props.isFocused) return
		this.props.onFocus(this.props.option, event)
	},
	render () {
		return (
			<div className="select-option-container" onMouseDown={this.handleMouseDown} onMouseEnter={this.handleMouseEnter} onMouseMove={this.handleMouseMove} title={this.props.option.title}>
        <div className="custom-slect-icon-container">{this.props.option.icon}</div>
				<div className="custom-slect-text-container">{this.props.children}</div>
			</div>
		)
	}
})

const GravatarValue = createClass({
	
	render () {
		return (
			<div className="Select-value" title={this.props.value.title}>
				<div className="Select-value-label select-value-container">
          <div className="custom-slect-icon-container">{this.props.value.icon}</div>
					<div className="custom-slect-text-container">{this.props.children}</div>
				</div>
			</div>
		);
	}
});


class CustomSelect extends Component {
  render () {

    const { value, onChange, searchable, options, className } = this.props

    return (
      <Select className={className} name="form-field-name" value={value} onChange={onChange} searchable={searchable}
								options={options}
                optionComponent={GravatarOption}
                valueComponent={GravatarValue}
							/>
    )
  }
}

export default CustomSelect