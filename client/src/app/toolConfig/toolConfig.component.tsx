import { fetchSeoToolConfig } from 'src/app/api/actions';
import { SeoToolConfig } from 'src/app/api/types';

export default async function ToolConfigComponent() {
  const config = await fetchSeoToolConfig();
  
  return (
    <div>
      {config.map((item: SeoToolConfig) => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
