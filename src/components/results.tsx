import type { Developer } from "../types/developer";

interface resultsProps {
  results: Developer[];
  onButton: (uuid: string) => void;
  buttonText: string;
}

export const Results = ({ results, onButton, buttonText }: resultsProps) => {
  return (
    <ul>
      {results.map((v) => (
        <li>
          {v.fullname} {v.email} {v.age} {v.role}
          <button style={{ marginLeft: "1rem" }}
            onClick={() => {
              onButton(v.uuid);
            }}
          >
            {buttonText}
          </button>
        </li>
      ))}
    </ul>
  );
};
