import React, { PropTypes } from 'react';
import Note from './Note';
/*import styles from './Notes.css'*/
import Edit from '../../components/Edit.js';

const Notes = ({ notes, laneId, editNote, updateNote, deleteNote }) => {
	return (
		<Note
			id={note.id}
			key={note.id}
			editing={note.editing}
		>
		<Edit
			editing={note.editing}
			value={note.task}
			onValueClick={()=>editNote(note.id)}
			onUpdate={(task)=>updateNote({
				...note,
				task,
				editing: false,
			}
		)}
			onDelete={()=>deleteNote(note.id, laneId)}
		/>
		</Note>
	);
}

Notes.PropTypes = {
	notes: PropTypes.array,
	updateNote: PropTypes.func,
	laneId: PropTypes.string,
	editNote: PropTypes.func,
	notes: PropTypes.array
};

export default Notes;