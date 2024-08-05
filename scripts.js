document.addEventListener('DOMContentLoaded', () => {
    const addNoteButton = document.getElementById('add-note');
    const noteInput = document.getElementById('note-input');
    const notesList = document.getElementById('notes-list');

    addNoteButton.addEventListener('click', addNote);

    function addNote() {
        const noteText = noteInput.value.trim();
        if (noteText === '') return;

        const noteElement = document.createElement('div');
        noteElement.className = 'note';

        const noteContent = document.createElement('p');
        noteContent.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            notesList.removeChild(noteElement);
        });

        noteElement.appendChild(noteContent);
        noteElement.appendChild(deleteButton);
        notesList.appendChild(noteElement);

        noteInput.value = '';
    }
});
