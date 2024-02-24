import ColorButton from "@/components/atoms/ColorButton";
import Calendar from "@/components/molecules/Calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex-1 z-10 max-w-5xl w-full h-full items-center justify-center font-mono text-sm lg:flex">
        <div className="flex flex-col gap-12">
          <div className="text-center text-4xl font-bold ">DG2Meet</div>
          <div className="flex-1 flex flex-col h-full w-full bg-white p-12 rounded-sm gap-6">
            <div className="flex gap-4 items-center">
              <label>Event Name</label>
              <input className="border rounded-sm h-8 px-2"></input>
            </div>
            <Calendar></Calendar>
            <ColorButton>Create Event</ColorButton>
          </div>
        </div>
      </div>
    </main>
  );
}
