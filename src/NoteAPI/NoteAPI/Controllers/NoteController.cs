using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NoteAPI.Data;

namespace NoteAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NoteController : ControllerBase
    {
        private readonly DataContext _context;
        public NoteController(DataContext context) 
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Note>>> GetNotes()
        {
            return Ok(await _context.Notes.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<Note>>> CreateNote(Note note)
        {
            _context.Notes.Add(note);
            await _context.SaveChangesAsync();

            return Ok(await _context.Notes.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Note>>> UpdateNote(Note note)
        {
            var dbNote = await _context.Notes.FindAsync(note.Id);
            if(dbNote == null)
                return BadRequest("Note not found");

            dbNote.Title = note.Title;
            dbNote.Description = note.Description;
            dbNote.TargetTime = note.TargetTime;

            await _context.SaveChangesAsync();

            return Ok(await _context.Notes.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<Note>>> DeleteNote(int id)
        {
            var dbNote = await _context.Notes.FindAsync(id);
            if (dbNote == null)
                return BadRequest("Note not found");

            _context.Notes.Remove(dbNote);
            await _context.SaveChangesAsync();

            return Ok(await _context.Notes.ToListAsync());
        }
    }
}
