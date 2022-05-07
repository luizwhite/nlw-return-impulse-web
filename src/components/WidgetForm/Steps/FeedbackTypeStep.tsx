import { useState } from 'react';

import { CloseButton } from '../../CloseButton';

import { Feedback, FeedbackType, feedbackTypes } from '..';

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {(Object.entries(feedbackTypes) as [FeedbackType, Feedback][]).map(
          ([key, value]) => (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center shadow-lg border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key)}
              type="button"
              {...{ key }}
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          )
        )}
      </div>
    </>
  );
}

export { FeedbackTypeStep };
