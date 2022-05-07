import { ArrowLeft } from 'phosphor-react';

import { CloseButton } from '../../CloseButton';

import { FeedbackType, feedbackTypes } from '..';
import { ScreenshotButton } from '../ScreenshotButton';
import { FormEvent, useCallback, useState } from 'react';

interface FeedbackContentStepProps {
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
  feedbackTypeSelected: FeedbackType;
}

function FeedbackContentStep({
  onFeedbackRestartRequested,
  onFeedbackSent,
  feedbackTypeSelected,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackComment, setFeedbackComment] = useState('');

  const feedbackTypeInfo = feedbackTypes[feedbackTypeSelected];

  const handleSubmitFeedback = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      console.log({
        screenshot,
        feedbackComment,
      });

      onFeedbackSent();
    },
    [screenshot, feedbackComment]
  );

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <span className="text-xl leading-6 flex items-center gap-2">
          <img
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt}
            className="w-6 h-6"
          />
          {feedbackTypeInfo.title}
        </span>

        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-transparent"
          onChange={(e) => setFeedbackComment(e.target.value)}
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            onScreenshotTook={setScreenshot}
            {...{ screenshot }}
          />

          <button
            type="submit"
            disabled={!feedbackComment}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}

export { FeedbackContentStep };
