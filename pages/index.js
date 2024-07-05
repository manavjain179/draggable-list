import Head from 'next/head';
import DraggableList from '../components/DraggableList';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Draggable List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-8">Draggable List</h1>
        <DraggableList />
      </main>
    </div>
  );
}
