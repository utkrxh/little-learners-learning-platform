import { useEffect, useState } from "react";

import {
  getLearningProgress,
  subscribeToLearningProgress,
} from "../progress/learningProgress";

function useLearningProgress() {
  const [progress, setProgress] = useState(getLearningProgress);

  useEffect(() => subscribeToLearningProgress(setProgress), []);

  return progress;
}

export default useLearningProgress;
