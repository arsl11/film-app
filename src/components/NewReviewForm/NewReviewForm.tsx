import { useLayoutEffect, useReducer, useRef } from "react";

const FORM_ACTIONS = {
    setName: "setName",
    setText: "setText",
    setRating: "setRating",
}

const reducer = (state, action) => {
    switch (action.type) {
        case FORM_ACTIONS.setName:
            return { name: action.payload.name, text: "", rating: 0 };
        case FORM_ACTIONS.setText:
            return { ...state, text: action.payload.text };
        case FORM_ACTIONS.setRating:
            return { ...state, rating: action.payload.rating }
        default:
            return state;
    }
}

const initialState: {
    name: string,
    text: string,
    rating: number
} = {
    name: "Tema",
    text: "text",
    rating: 10,
}

export const NewReviewForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const ref = useRef();

    useLayoutEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }

        return () => {}
    }, [])

    const onNameChange = (event) => dispatch(
        { type: FORM_ACTIONS.setName, payload: { name: event.target.value } }
    )

    const onTextChange = (event) => dispatch(
        { type: FORM_ACTIONS.setText, payload: { text: event.target.value } }
    )

    const onRatingChange = (event) => dispatch(
        { type: FORM_ACTIONS.setRating, payload: { rating: event.target.value } }
    )

    return (
        <div>
            <label>
                Name
                <input
                    ref={ref}
                    value={state.name}
                    onChange={onNameChange} 
                    type="text" 
                />
            </label>
            <label>
                Text:
                <input
                    value={state.text}
                    onChange={onTextChange}
                    type="text" 
                />
            </label>
            <label>
                Rating:
                <input
                    value={state.rating}
                    onChange={onRatingChange}
                    type="number"
                />
            </label>
        </div>
    );
}