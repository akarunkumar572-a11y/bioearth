export default function ContactCard({ name, phone, email }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 border border-accent/20 flex flex-col gap-1">
      <div className="font-bold text-primary">{name}</div>
      <div className="text-sm text-gray-700">{phone}</div>
      <div className="text-sm text-blue-600 underline"><a href={`mailto:${email}`}>{email}</a></div>
    </div>
  );
}
