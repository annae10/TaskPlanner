namespace NoteAPI
{
    public class Note
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string TargetTime { get; set; } = string.Empty;
    }
}
