import { useEffect, useRef, useState } from "react"
import { Backdrop } from "./Backdrop"
import { RegionSelect } from "./RegionSelect"
import { DatePickerModal } from "./stay-details/DatePickerModal"
import { GuestSelectModal } from "./stay-details/GuestSelectModal"
import { useForm } from "../customHooks/useForm"
import { utilService } from "../services/util.service"
import useClickOutside from "../customHooks/useClickOutside"
import { ButtonSearch } from "./ButtonSearch"

export function SearchBarForm({
    setIsSearchBarOpen,
    selectedInput,
    setSelectedInput,
    // onSetFilter,
    filterBy, 
    // onSearch
}) {
    const [expanded, setExpanded] = useState(false)
    const elSearchBarForm = useRef(null)
    const [fields, setFields, handleChange] = useForm({
        destination: filterBy.txt || '',
        checkIn: filterBy.checkIn || '',
        checkOut: filterBy.checkOut || '',
        guests: {}
    })

    useEffect(() => {
        setExpanded(prevState => !prevState)
    }, [])


    useClickOutside(elSearchBarForm, () => {
        setSelectedInput(null)
    })

    function handleOnClick(input) {
        setSelectedInput(input)
    }

    function onSetField(field, value) {
        setFields((prevFields) => ({ ...prevFields, [field]: value }))
        if (field === 'destination') setSelectedInput('check-in')
        if (field === 'checkIn') setSelectedInput('checkout')
        // if (field === 'checkOut') setSelectedInput('guests')
    }

    function toggleActiveClass(input) {
        return (selectedInput === input) ? ' active' : ''
    }

    // function onSearch() {
    //     const { adults = 0, children = 0 } = fields.guests
    //     const totalGuests = adults + children
    //     const { destination, checkIn, checkOut, guests } = fields
    //     const searchFormIputs = {
    //         destination,
    //         checkIn,
    //         checkOut,
    //         guests: (totalGuests === 0) ? '' : totalGuests,
    //         ...guests
    //     }
    //     onSetFilter(searchFormIputs)
    //     setIsSearchBarOpen(false)
    // }

    const checkIn = fields['checkIn'] ? utilService.formatToMonthDay(fields['checkIn']) : 'Add dates'
    const checkOut = fields['checkOut'] ? utilService.formatToMonthDay(fields['checkOut']) : 'Add dates'
    const totalGuestCount = utilService.countGuests(fields.guests)

    return (
        <div className="search-bar-form">
            <div className={`form-container ${expanded && 'expanded'} ${!selectedInput && 'no-modals'}`} ref={elSearchBarForm}>
                <div className="input-destination">
                    <button
                        className={"destination btn-input dest" + toggleActiveClass('destination')}
                        onClick={() => handleOnClick('destination')}>
                        <div className="label">Where</div>
                        <input
                            type="text"
                            placeholder="Search destinations"
                            name="destination"
                            value={fields.destination}
                            onChange={handleChange}
                            onClick={(e) => { e.stopPropagation(); setSelectedInput('destination') }}
                        />
                    </button>
                    {selectedInput === 'destination' && <RegionSelect onSetField={onSetField} />}
                </div>
                <div className="form-seperator"></div>
                <div className="input-dates">
                    <button
                        className={"check-in btn-input" + toggleActiveClass('check-in')}
                        onClick={() => handleOnClick('check-in')}>
                        <div style={{ position: 'relative' }}>
                            <div className="label">Check in</div>
                            <div className="sub-label">{checkIn}</div>
                            {checkIn !== 'Add dates' && selectedInput === 'check-in' &&
                                <span
                                    className="btn-close"
                                    onClick={() => {
                                        onSetField('checkIn', '');
                                        onSetField('checkOut', '')
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: 4, overflow: 'visible' }}><path d="m6 6 20 20M26 6 6 26"></path></svg>
                                </span>}
                        </div>
                    </button>
                    <div className="form-seperator"></div>
                    <button
                        className={"check-out btn-input" + toggleActiveClass('checkout')}
                        onClick={() => handleOnClick('checkout')}>
                        <div style={{ position: 'relative' }}>
                            <div className="label">Check out</div>
                            <div className="sub-label">{checkOut}</div>
                            {checkOut !== 'Add dates' && selectedInput === 'checkout' &&
                                <span
                                    className="btn-close"
                                    onClick={() => {
                                        onSetField('checkIn', '');
                                        onSetField('checkOut', '')
                                    }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '12px', width: '12px', stroke: 'currentcolor', strokeWidth: 4, overflow: 'visible' }}><path d="m6 6 20 20M26 6 6 26"></path></svg>
                                </span>}
                        </div>
                    </button>
                    {(selectedInput === 'check-in' || selectedInput === 'checkout') &&
                        <DatePickerModal formLayout='form-layout' onSetField={onSetField} />
                    }
                </div>
                <div className="form-seperator"></div>
                <div className={"input-guests-search" + toggleActiveClass('guests')}>
                    <div className="flex space-between align-center">
                        <button className="guests btn-input" onClick={() => handleOnClick('guests')}>
                            <div className="label">Who</div>
                            <div className="sub-label">{totalGuestCount}</div>
                        </button>
                        {/* <button className={`btn-search${selectedInput ? ' expand' : ''}`} onClick={onSearch}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" role="presentation" focusable="false" style={{ display: 'block', fill: 'none', height: '16px', width: '16px', stroke: 'currentcolor', strokeWidth: 4, overflow: 'visible' }}><path fill="none" d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"></path></svg>
                            <span className="txt-search">Search</span>
                        </button> */}
                        <ButtonSearch selectedInput={selectedInput} fields={fields} filterBy={filterBy} setIsSearchBarOpen={setIsSearchBarOpen}/>
                    </div>
                    {selectedInput === 'guests' &&
                        <GuestSelectModal
                            formLayout='form-layout'
                            guestCount={fields.guests}
                            onSetField={onSetField}
                        />
                    }
                </div>
            </div>
            <Backdrop setIsSearchBarOpen={setIsSearchBarOpen} />
        </div>
    )
}